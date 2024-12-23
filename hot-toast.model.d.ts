import { Injector } from '@angular/core';
import { Content } from '@ngneat/overview';
import { Observable } from 'rxjs';
export declare class ToastConfig implements DefaultToastOptions {
    /**
     * Sets the reverse order for hot-toast stacking
     *
     * @default false
     */
    reverseOrder: boolean;
    ariaLive: ToastAriaLive;
    role: ToastRole;
    position: ToastPosition;
    className: string;
    closeStyle: any;
    dismissible: boolean;
    autoClose: boolean;
    duration: number;
    icon: Content;
    iconTheme: IconTheme;
    style: any;
    theme: ToastTheme;
    attributes: Record<string, string>;
    success: ToastOptions<unknown> & {
        content?: Content;
    };
    error: ToastOptions<unknown> & {
        content?: Content;
    };
    loading: ToastOptions<unknown> & {
        content?: Content;
    };
    blank: ToastOptions<unknown> & {
        content?: Content;
    };
    warning: ToastOptions<unknown> & {
        content?: Content;
    };
}
export declare type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'warning' | 'info';
export declare type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare type IconTheme = {
    primary: string;
    secondary?: string;
};
export declare type ToastTheme = 'toast' | 'snackbar';
export declare type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export declare type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
export declare const resolveValueOrFunction: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
export declare type ToastRole = 'status' | 'alert';
export declare type ToastAriaLive = 'assertive' | 'off' | 'polite';
export interface Toast<DataType> {
    type: ToastType;
    /**
     * Unique id to associate with hot-toast.
     * There can't be multiple hot-toasts opened with same id.
     *
     * @default Date.now().toString()
     */
    id: string;
    /** The message to show in the hot-toast. */
    message: Content;
    /**
     * Role of the live region.
     *
     * @default status
     */
    role: ToastRole;
    /** aria-live value for the live region.
     *
     * @default polite
     */
    ariaLive: ToastAriaLive;
    /**Icon to show in the hot-toast */
    icon?: Content;
    /**
     * Duration in milliseconds after which hot-toast will be auto closed.
     * Can be disabled via `autoClose: false`
     *
     * @default 3000 | error = 4000 | loading = 30000
     */
    duration?: number;
    /**
     * Show close button in hot-toast
     *
     * @default false
     */
    dismissible?: boolean;
    /**
     * Auto close hot-toast after duration
     *
     * @default true
     */
    autoClose?: boolean;
    /**Extra styles to apply for hot-toast */
    style?: any;
    /**Extra CSS classes to be added to the hot toast container. */
    className?: string;
    /**Extra attribute to be added to the hot toast container. */
    attributes?: Record<string, string>;
    /**Use this to change icon color */
    iconTheme?: IconTheme;
    /**
     * Visual appearance of hot-toast
     *
     * @default toast
     */
    theme?: ToastTheme;
    /**
     * The position to place the hot-toast.
     *
     *  @default top-center
     */
    position?: ToastPosition;
    /**Extra styles to apply for close button */
    closeStyle?: any;
    createdAt: number;
    visible: boolean;
    height?: number;
    observableMessages?: ObservableMessages<unknown, DataType>;
    /**
     * Useful when you want to keep a persistance for toast based on ids, across sessions.
     *
     * @example
     * // Lets say you want show hot-toast, with a particular id,
     * // max 3 times to a user irrespective of browser session.
     * // In this case you will set this as:
     * { enabled: true, count: 3 }
     *
     * @type {ToastPersistConfig}
     */
    persist?: ToastPersistConfig;
    /**
     * Allows you to pass injector for your component
     *
     * @since 1.1.0
     * @type {Injector}
     * @memberof Toast
     */
    injector?: Injector;
    /**
     * Allows you to pass data for your component/template
     *
     * @since 2.0.0
     * @type {DataType}
     * @memberof Toast
     */
    data?: DataType;
}
export declare type ToastOptions<DataType> = Partial<Pick<Toast<DataType>, 'id' | 'icon' | 'duration' | 'dismissible' | 'autoClose' | 'role' | 'ariaLive' | 'className' | 'style' | 'iconTheme' | 'theme' | 'position' | 'closeStyle' | 'persist' | 'injector' | 'data' | 'attributes'>>;
export declare type DefaultToastOptions = ToastOptions<unknown> & {
    [key in ToastType]?: ToastOptions<unknown> & {
        content?: Content;
    };
};
export declare type ObservableLoading<DataType> = {
    content: Content;
} & ToastOptions<DataType>;
export declare type ObservableSuccessOrError<T, DataType> = {
    content: ValueOrFunction<Content, T>;
} & ToastOptions<DataType>;
export declare type ObservableMessages<T, DataType> = {
    loading?: Content | ObservableLoading<DataType>;
    success?: ValueOrFunction<Content, T> | ObservableSuccessOrError<T, DataType>;
    error?: ValueOrFunction<Content, any> | ObservableSuccessOrError<any, DataType>;
};
export interface HotToastServiceMethods {
    show<DataType>(message?: Content, options?: ToastOptions<DataType>): CreateHotToastRef<DataType | unknown>;
    error<DataType>(message?: Content, options?: ToastOptions<DataType>): CreateHotToastRef<DataType | unknown>;
    success<DataType>(message?: Content, options?: ToastOptions<DataType>): CreateHotToastRef<DataType | unknown>;
    loading<DataType>(message?: Content, options?: ToastOptions<DataType>): CreateHotToastRef<DataType | unknown>;
    warning<DataType>(message?: Content, options?: ToastOptions<DataType>): CreateHotToastRef<DataType | unknown>;
    observe<T, DataType>(messages: ObservableMessages<T, DataType>): (source: Observable<T>) => Observable<T>;
    close(id?: string): void;
}
export declare type UpdateToastOptions<DataType> = Partial<Pick<Toast<DataType>, 'icon' | 'duration' | 'dismissible' | 'className' | 'style' | 'iconTheme' | 'type' | 'theme' | 'closeStyle'>>;
export interface HotToastRefProps<DataType> {
    /** Returns all the toast options */
    getToast: () => Toast<DataType>;
    dispose: () => void;
    /**Updates only message */
    updateMessage: (message: Content) => void;
    /**Update updatable options of toast */
    updateToast: (options: UpdateToastOptions<DataType>) => void;
    /** Observable for notifying the user that the toast has been closed. */
    afterClosed: Observable<HotToastClose>;
    /**Closes the toast */
    close: (closeData?: {
        dismissedByAction: boolean;
    }) => void;
    /**
     * @since 2.0.0
     */
    readonly data: DataType;
}
/** Event that is emitted when a snack bar is dismissed. */
export interface HotToastClose {
    /** Whether the snack bar was dismissed using the action button. */
    dismissedByAction: boolean;
    id: string;
}
export declare class ToastPersistConfig {
    /**
     *In which storage id vs. counts should be stored
     *
     * @type {('local' | 'session')}
     * @memberof ToastPersistConfig
     * @default 'local'
     */
    storage?: 'local' | 'session';
    /**
     *The key pattern to store object in storage. `${id}` in pattern is replaced with actual toast id.
     *
     * @type {('local' | 'session')}
     * @memberof ToastPersistConfig
     * @default 'ngneat/hottoast-${id}'
     */
    key?: string;
    /**
     *The number of toasts allowed to show.
     *
     * @memberof ToastPersistConfig
     * @default 1
     */
    count?: number;
    enabled: boolean;
}
export declare type AddToastRef<DataType> = Pick<HotToastRefProps<DataType>, 'afterClosed' | 'dispose' | 'updateMessage' | 'updateToast'>;
export declare type CreateHotToastRef<DataType> = Omit<Omit<HotToastRefProps<DataType>, 'appendTo'>, 'dispose'>;
export declare type DefaultDataType = Record<string, any>;
