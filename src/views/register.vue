<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- form -->
            <form
                class="flex flex-col justify-start space-y-6"
                @submit.prevent="onSubmit()"
            >
                <div class="row">
                    <label class="flex flex-col justify-start" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input
                            id="fullName"
                            class="px-4 py-3 rounded-lg border border-gray-500 mt-1"
                            type="text"
                            placeholder="Full name"
                            v-model="fullName"
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
                            v-model="email"
                        />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col justify-start" for="passWord">
                        <span class="font-semibold">Password</span>
                        <!-- v-model: Vue có thể tự động cập nhật phần tử có trên input -->
                        <input
                            id="passWord"
                            class="px-4 py-3 rounded-lg border border-gray-500 mt-1"
                            type="password"
                            placeholder="Password"
                            v-model="password"
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
import { useSignUp } from '@/composable/useSignUp';
import { ref } from 'vue';
export default {
    name: 'RegisterView',
    setup() {
        const { error, isPending, signUp } = useSignUp();

        const fullName = ref('');
        const email = ref('');
        const password = ref('');

        async function onSubmit() {
            await signUp(fullName.value, email.value, password.value);
        }
        return { fullName, email, password, error, isPending, onSubmit };
    },
};
</script>
