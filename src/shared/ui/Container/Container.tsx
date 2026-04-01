import { Container } from '@mantine/core';
import type { ContProps } from './types';

export default function Cont({children}: ContProps) {
    return (
        <Container strategy="block" size={900}>
            {children}
        </Container>
    );
};