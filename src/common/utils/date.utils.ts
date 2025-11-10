export class DateUtils {
  /**
   * Formata data no padrão YYYYMMDD
   */
  static formatDateToYYYYMMDD(date: Date): string {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    return `${ano}${mes}${dia}`;
  }

  /**
   * Retorna o início do dia (00:00:00.000)
   */
  static startOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  /**
   * Retorna o fim do dia (23:59:59.999)
   */
  static endOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
  }

  /**
   * Formata número sequencial com padding de zeros
   */
  static padSequentialNumber(number: number, padding: number): string {
    return String(number).padStart(padding, '0');
  }
}


