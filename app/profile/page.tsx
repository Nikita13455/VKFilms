'use client'

import { useSelector, } from "react-redux";
import Profile from "../components/Profile/Profile";

export default function ProfilePage() {
    const { user, isAuth } = useSelector((state: any) => state.user)
    console.log('ProfilePage user:', user)

    return (
        <Profile user={user} />
    )
}