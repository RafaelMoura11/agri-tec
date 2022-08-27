import LostInterface from "../interfaces/LostInterface";

const checkFields = (lost: LostInterface): string[] => {
    const invalidFields = []
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const dateRegex = new RegExp('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$')
    const isLatitude = (num: number) => isFinite(num) && Math.abs(num) <= 90;
    const isLongitude = (num: number) => isFinite(num) && Math.abs(num) <= 180;

    if (!lost.name) invalidFields.push('name')
    if (!emailRegex.test(lost.email)) invalidFields.push('email')
    if (!isLatitude(lost.latitude)) invalidFields.push('latitude')
    if (!isLongitude(lost.longitude)) invalidFields.push('longitude')
    if (!lost.event) invalidFields.push('event')
    if (!lost.type) invalidFields.push('type')
    if (!Number(lost.cpf) && lost.cpf.length !== 11) invalidFields.push('cpf')
    if (!dateRegex.test(lost.date) && lost.date.length !== 10) invalidFields.push('date')

    return invalidFields;
}

export { checkFields };
