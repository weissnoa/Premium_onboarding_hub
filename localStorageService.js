// LocalStorage service to replace Base44
// This provides a simple local storage solution without external dependencies

const STORAGE_KEYS = {
  USER: 'onboarding_user',
  PROGRESS: 'onboarding_progress'
};

// User service (mock authentication)
export const UserService = {
  // Get current user (mock - returns a default user)
  async me() {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Create a default user if none exists
    const defaultUser = {
      email: 'user@example.com',
      full_name: 'Guest User',
      id: 'local-user-' + Date.now()
    };
    
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(defaultUser));
    return defaultUser;
  },

  // Mock login (no-op for local storage)
  async loginWithRedirect(redirectUrl) {
    console.log('Login redirect requested (local mode - no authentication needed)');
    // In local mode, we just ensure a user exists
    await this.me();
  }
};

// OnboardingProgress service using localStorage
export const OnboardingProgressService = {
  // Get all progress records (filtered by user email)
  async filter({ created_by }) {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!stored) {
      return [];
    }
    
    const allProgress = JSON.parse(stored);
    // Filter by user email if provided
    if (created_by) {
      return allProgress.filter(p => p.created_by === created_by);
    }
    return allProgress;
  },

  // Create a new progress record
  async create(data) {
    const user = await UserService.me();
    const newProgress = {
      id: 'progress-' + Date.now(),
      ...data,
      created_by: user.email,
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString()
    };

    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const allProgress = stored ? JSON.parse(stored) : [];
    allProgress.push(newProgress);
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));

    return newProgress;
  },

  // Update an existing progress record
  async update(id, updates) {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!stored) {
      throw new Error('Progress record not found');
    }

    const allProgress = JSON.parse(stored);
    const index = allProgress.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error('Progress record not found');
    }

    allProgress[index] = {
      ...allProgress[index],
      ...updates,
      updated_date: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
    return allProgress[index];
  },

  // Get a single progress record by ID
  async get(id) {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!stored) {
      return null;
    }

    const allProgress = JSON.parse(stored);
    return allProgress.find(p => p.id === id) || null;
  }
};

