
/* eslint-disable react-refresh/only-export-components */
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase-client";

interface AuthContextType {
    user: User | null;
    signInWithGithub: () => void;
    singOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setUser(session?.user ?? null)
        })

        const {data: listener} = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            listener.subscription.unsubscribe();
        }
    }, [])

    const signInWithGithub = () => {
        supabase.auth.signInWithOAuth({provider: "github"})
    }

    const singOut = () => {
        supabase.auth.signOut();
    }

    return (
        <AuthContext.Provider value={{user, signInWithGithub, singOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within the AuthProvider")
    }
    return context;
}