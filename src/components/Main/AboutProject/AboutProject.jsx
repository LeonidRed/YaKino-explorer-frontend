import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div class="about-project__container">
        < h2 className="about-project__header" > О проекте</h2 >

        <div className="about-project__about">
          <div className="about-project__about-container">
            <h4 className="about-project__about-header">Дипломный проект включал 5 этапов</h4>
            <p className="about-project__about-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности&nbsp;и&nbsp;финальные доработки.</p>
          </div>
          <div className="about-project__about-container">
            <h4 className="about-project__about-header">На выполнение диплома ушло 5 недель</h4>
            <p className="about-project__about-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <table className="about-project__table-terms">
          <tr>
            <th className="about-project__table-terms-header about-project__table-terms-header-col1">1 неделя</th>
            <th className="about-project__table-terms-header about-project__table-terms-header-col2">4 недели</th>
          </tr>
          <tr>
            <td className="about-project__table-terms-data">Back-end</td>
            <td className="about-project__table-terms-data">Front-end</td>
          </tr>
        </table>

      </div >
    </section >
  );
};