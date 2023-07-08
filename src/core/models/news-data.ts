export class NewsData {
  id: number
  title: string
  createdAt: string
  image: string
  description: string

  static getDateInfo(news: NewsData) {
    const [year, month, day] = news.createdAt.split('-')
    return {
      year: year,
      day: day,
      month: new Date(Number(year), Number(month) - 1).toLocaleDateString(
        'ru',
        {
          month: 'long',
        },
      ),
    }
  }
}
