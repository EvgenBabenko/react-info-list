const addFieldID = data => {
    if (data[0].id) return;

    let id = 0;

    const copy = JSON.parse(JSON.stringify(data));

    copy.map(item => item.id = id++)

    return copy
}

export { addFieldID }