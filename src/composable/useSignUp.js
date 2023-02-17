import { ref } from 'vue';
import { projectAuth, createUser, SignUser } from '@/configs/firebase';

const error = ref(null);
const isPending = ref(false);

function signUp() {
    createUser()
}

export function useSignUp() {
    return {};
}
