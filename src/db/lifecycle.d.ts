export = DatabaseLifecycleManager;
/**
 * Database Lifecycle Manager
 *
 * Manages database operations lifecycle including:
 * - Operation tracking for graceful shutdown
 * - Database state management
 * - Graceful closure with pending operation completion
 */
declare function DatabaseLifecycleManager(db: any): {
    trackOperation: (operation: Promise<any>) => Promise<any>;
    getState: () => string;
    getPendingOperationCount: () => number;
    isReady: () => boolean;
    gracefulClose: (callback: Function) => Promise<any>;
    forceClose: (callback: Function) => Promise<any>;
    setShutdownTimeout: (timeout: number) => void;
    getShutdownTimeout: () => number;
};
