import CheckboxLike from './common/CheckboxLike';

/**
 * [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
 *
 * A checkable input that has three possible values: true, false, or mixed.
 */
export class Checkbox extends CheckboxLike {
	role = 'checkbox';
}

export default Checkbox;

export type {
	CheckboxLikeProps as CheckboxProps,
	ChangeEvent,
	ChangeEventHandler,
} from './common/CheckboxLike';