<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- form -->
            <form
                class="flex flex-col justify-start space-y-6"
                @submit.prevent="onSubmit"
            >
                <div class="row">
                    <label class="flex flex-col justify-start" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input
                            id="fullName"
                            class="px-4 py-3 rounded-lg border border-gray-500 mt-1"
                            type="text"
                            placeholder="Full name"
                        />
                    </label>
                </div>
                <div class="row">
                    <label
                        class="flex flex-col justify-start"
                        for="emailAdress"
                    >
                        <span class="font-semibold">Email Address</span>
                        <input
                            id="emailAdress"
                            class="px-4 py-3 rounded-lg border border-gray-500 mt-1"
                            type="email"
                            placeholder="Email "
                        />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col justify-start" for="passWord">
                        <span class="font-semibold">Password</span>
                        <input
                            id="passWord"
                            class="px-4 py-3 rounded-lg border border-gray-500 mt-1"
                            type="password"
                            placeholder="Password"
                        />
                    </label>
                </div>
                <div class="row">
                    <button
                        class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <!-- direction -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm already a member.</span>
                <span class="ml-1 text-primary font-semibold">
                    <router-link :to="{ name: 'Logina', params: {} }"
                        >Sign In</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterView',
    setup() {
        function onSubmit() {}
        return { onSubmit };
    },
};
</script>
