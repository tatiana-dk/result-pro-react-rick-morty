import { Link } from "react-router";
import { Button } from '@mantine/core';
import type { NavigationProps } from './types';

function handleClick() {}

export function Navigation({paths}: NavigationProps) {
    return (
        <>
            {
                paths.map(path => (
                    <Link to={path.to}>
                        <Button variant="subtle" color="gray" onClick={handleClick}>{path.text}</Button>
                    </Link>
                ))
            }
        </>
    );
};