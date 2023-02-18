import { ref } from 'vue';
import { projectAuth } from '@/configs/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

async function signUp(fullName, email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const res = await createUserWithEmailAndPassword(
            projectAuth,
            email,
            password,
        );
        if (!res) throw new Error('No create');
        await updateProfile(res.user, { displayName: fullName });
        console.log('day ne..............', res);
        return res;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignUp() {
    return { error, isPending, signUp };
}
