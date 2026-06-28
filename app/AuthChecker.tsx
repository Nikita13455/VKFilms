import { checkAuth } from "@/store/slices/userSlice";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";



export function AuthChecker({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkAuth())
    }, [dispatch])

    return children
}