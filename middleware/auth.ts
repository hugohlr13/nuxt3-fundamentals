export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = true;
    if(!userIsLoggedIn) {
        return navigateTo('/login');    
    }
});