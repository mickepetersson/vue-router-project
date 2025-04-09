<template>
    <div>
        404 Not Found

        <p>Return to <RouterLink to="/">Home</RouterLink>
        </p>
    </div>
    <div>
        {{ $route.params.pathMatch }}
    </div>
</template>
