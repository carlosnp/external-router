import type { CanActivateFn } from '@angular/router';

/**
 * Redirecciona a una url externa
 * @param route 
 * @param state 
 * @returns 
 */
export const ExternalRedirectGuard: CanActivateFn = (route, state) => {
  const externalUrl = route.queryParams['externalUrl']
  if (externalUrl && externalUrl !=='/') {
    window.location.href = externalUrl;
    return true
  }

  return false;
};
