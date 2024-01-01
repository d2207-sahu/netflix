export const formatReviewCount = (count) => {
    const formattedCount = count?.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    if (count >= 1000000) {
        return `${(count / 1000000).toLocaleString(undefined, { maximumFractionDigits: 2 })}M reviews`;
    } else if (count >= 100000) {
        return `${(count / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 })}T reviews`;
    } else if (count >= 10000) {
        return `${(count / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}H reviews`;
    }
    else {
        return `${formattedCount} reviews`;
    }
};