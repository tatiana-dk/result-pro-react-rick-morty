import { Button } from '@mantine/core';
import type { ButtonProps } from './types';

export default function Btn({text, click}: ButtonProps) {
    return <Button variant="default" onClick={click}>{text}</Button>
};