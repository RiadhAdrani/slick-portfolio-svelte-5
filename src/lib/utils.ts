import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { base } from '$app/paths';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function computeExactDuration(from: Date, to: Date = new Date()): string {
	const fromMs = from.getTime();
	const toMs = to.getTime();

	let remaining = toMs - fromMs;
	const parts: string[] = [];

	const years = Math.trunc(remaining / YEAR);
	if (years >= 1) {
		remaining = remaining % YEAR;
		parts.push(`${years} year${years >= 2 ? 's' : ''}`);
	}

	const months = Math.trunc(remaining / MONTH);
	if (months >= 1) {
		remaining = remaining % MONTH;
		parts.push(`${months} month${months >= 2 ? 's' : ''}`);
	}

	const weeks = Math.trunc(remaining / WEEK);
	if (weeks >= 1) {
		remaining = remaining % WEEK;
		parts.push(`${weeks} week${weeks >= 2 ? 's' : ''}`);
	}

	const days = Math.trunc(remaining / DAY);
	if (days >= 1) {
		parts.push(`${days} day${days >= 2 ? 's' : ''}`);
	}

	if (parts.length === 0) {
		return '1 day';
	}

	const firstTwo = parts.slice(0, 2);
	if (firstTwo.length === 1) return firstTwo[0];
	return `${firstTwo[0]} and ${firstTwo[1]}`;
}

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getMonthName = (index: number): string => {
	return monthNames[index];
};

export const href = (url: string) => `${base}${url}`;

export const getMonthAndYear = (date?: Date) => {
	if (!date) return 'Present';

	return `${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};
