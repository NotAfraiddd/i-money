import { ref } from 'vue';
import { projectAuth } from '@/configs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const res = await signInWithEmailAndPassword(
            projectAuth,
            email,
            password,
        );
        
        return res;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignIn() {
    return { error, isPending, signIn };
}
