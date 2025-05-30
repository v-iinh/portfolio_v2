import { useState, useCallback } from 'react';

export function useMenuState() {
    const [menu, setMenu] = useState(['active_menu', '', '']);

    const activeMenu = useCallback((id) => {
        setMenu((prev) => prev.map((_, idx) => (idx === id ? 'active_menu' : '')));
    }, []);

    return { menu, activeMenu, setMenu };
}