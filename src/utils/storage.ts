type StorageType = 'local' | 'session';

export const storage = {
  get: <T>(key: string, storageType: StorageType = 'local'): T | null => {
    const storage = storageType === 'local' ? localStorage : sessionStorage;
    const item = storage.getItem(key);
    
    if (!item) return null;

    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Failed to parse JSON for key: ${key}`, error);
      return null;
    }
  },

  set: <T>(key: string, value: T, storageType: StorageType = 'local'): void => {
    const storage = storageType === 'local' ? localStorage : sessionStorage;

    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to set item for key: ${key}`, error);
    }
  },

  remove: (key: string, storageType: StorageType = 'local'): void => {
    const storage = storageType === 'local' ? localStorage : sessionStorage;
    storage.removeItem(key);
  },
};

  
export default storage