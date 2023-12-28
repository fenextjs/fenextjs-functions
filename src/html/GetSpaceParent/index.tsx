export const GetSpaceParent = (element: HTMLElement) => {
    const selectRect = element.getBoundingClientRect();
    let parentHidden = element.parentElement;

    while (
        parentHidden &&
        getComputedStyle(parentHidden).overflow != "hidden" &&
        getComputedStyle(parentHidden).overflow != "scroll" &&
        getComputedStyle(parentHidden).overflow != "auto" &&
        parentHidden.tagName != "BODY"
    ) {
        parentHidden = parentHidden.parentElement;
    }
    if (!parentHidden) {
        return {
            spaceTop: 0,
            spaceLeft: 0,
            spaceRight: 0,
            spaceBottom: 0,
        };
    }

    const containerRect = parentHidden.getBoundingClientRect();
    const spaceTop = selectRect.top - containerRect.top;
    const spaceLeft = selectRect.left - containerRect.left;
    const spaceRight = containerRect.right - selectRect.right;
    const spaceBottom = containerRect.bottom - selectRect.bottom;
    return {
        spaceTop,
        spaceLeft,
        spaceRight,
        spaceBottom,
    };
};
