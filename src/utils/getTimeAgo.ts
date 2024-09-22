/**
 * Returns a string representing how long ago a given timestamp was from the current time.
 * @param timestamp - The timestamp to compare against the current time.
 * @returns A human-readable string indicating the time elapsed.
 */
export const getTimeAgo = (timestamp: string): string => {
    const currentDate = new Date();
    const date = new Date(timestamp);

    const timeDifference = currentDate.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
};