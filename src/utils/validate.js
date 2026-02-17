export function required(value, message = 'This field is required'){
    console.log(value);
    
    return value && String(value).trim() ? "" : message;
}