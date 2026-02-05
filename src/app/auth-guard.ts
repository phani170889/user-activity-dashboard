import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.getIsAuthenticated()) {
    return true; // Allow navigation
  } else {
    // Redirect to login page if not authenticated
    return router.createUrlTree(['/login']); 
  }

  // return true; // Temporarily allow all navigation
};
