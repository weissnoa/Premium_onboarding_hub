// Using localStorage instead of Base44
import { OnboardingProgressService, UserService } from './localStorageService';

// Export services with the same API as Base44 for compatibility
export const OnboardingProgress = OnboardingProgressService;
export const User = UserService;