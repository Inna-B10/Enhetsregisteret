import { GetKommuner } from './GetKommuner'
import { SaveSearch } from './SaveSearch'
import styles from './SearchImput.module.css'
import { SearchRadioComp } from './SearchRadioComp'

function SearchInput({ handleSearch, filters, updateFilters, resetFilters }) {
  return (
    <>
      {/* ------------------------------ Bedriftsnavn */}
      <div>
        <div>Bedriftsnavn: </div>
        <div>
          <input
            type='text'
            value={filters.bedriftName}
            placeholder='Bedriftsnavn'
            onChange={(e) => updateFilters({ bedriftName: e.target.value })}
          />
        </div>
      </div>
      {/* --------------------------- Organisasjonsnummer */}
      <div>
        <div>Organisasjonsnummer: </div>
        <div>
          <input
            type='text'
            value={filters.organisasjonsnummer}
            placeholder='Organisasjonsnummer'
            onChange={(e) =>
              updateFilters({ organisasjonsnummer: e.target.value })
            }
          />
        </div>
      </div>
      {/* -------------------------------- Kommuner */}
      <div className={styles.inputKommuner}>
        <GetKommuner filters={filters} updateFilter={updateFilters} />
      </div>
      {/* ---------------------------- Registreringsdato */}
      <div>
        <div>Registreringsdato fra: </div>
        <div>
          <input
            type='text'
            className={styles.inputDate}
            value={filters.fraRegistreringsdato}
            placeholder='yyyy-mm-dd'
            onChange={(e) =>
              updateFilters({ fraRegistreringsdato: e.target.value })
            }
          />
        </div>
        <div>til: </div>
        <div>
          <input
            type='text'
            className={styles.inputDate}
            value={filters.tilRegistreringsdato}
            placeholder='yyyy-mm-dd'
            onChange={(e) =>
              updateFilters({ tilRegistreringsdato: e.target.value })
            }
          />
        </div>
      </div>
      <SearchRadioComp filters={filters} updateFilters={updateFilters} />
      {/* --------------------------------- Konkurs */}
      {/* <div>
        Konkurs:{' '}
        <input
          type='radio'
          name='konkurs'
          value='konkursYes'
          onChange={() => updateFilters({ konkurs: 'konkursYes' })}
          checked={filters.konkurs === 'konkursYes' ? true : false}
        />{' '}
        Ja
        <input
          type='radio'
          name='konkurs'
          value='konkursNo'
          onChange={() => updateFilters({ konkurs: 'konkursNo' })}
          checked={filters.konkurs === 'konkursNo' ? true : false}
        />{' '}
        Nei
        <input
          type='radio'
          name='konkurs'
          value='konkursAll'
          onChange={() => updateFilters({ konkurs: 'konkursAll' })}
          checked={filters.konkurs === 'konkursAll' ? true : false}
        />{' '}
        Begge
      </div> */}
      {/* ------------ UnderTvangsavviklingEllerTvangsopplosning */}
      {/* <div>
        Under Tvangsavvikling eller Tvangsopplosning:{' '}
        <input
          type='radio'
          name='tvangsavvikling'
          value='tvangsavviklingYes'
          onChange={() =>
            updateFilters({ tvangsavvikling: 'tvangsavviklingYes' })
          }
          checked={
            filters.tvangsavvikling === 'tvangsavviklingYes' ? true : false
          }
        />{' '}
        Ja
        <input
          type='radio'
          name='tvangsavvikling'
          value='tvangsavviklingNo'
          onChange={() =>
            updateFilters({ tvangsavvikling: 'tvangsavviklingNo' })
          }
          checked={
            filters.tvangsavvikling === 'tvangsavviklingNo' ? true : false
          }
        />{' '}
        Nei
        <input
          type='radio'
          name='tvangsavvikling'
          value='tvangsavviklingAll'
          onChange={() =>
            updateFilters({ tvangsavvikling: 'tvangsavviklingAll' })
          }
          checked={
            filters.tvangsavvikling === 'tvangsavviklingAll' ? true : false
          }
        />{' '}
        Begge
      </div> */}
      {/* ----------------------------- UnderAvvikling */}
      {/* <div>
        Under Avvikling:{' '}
        <input
          type='radio'
          name='underAvvikling'
          value='underAvviklingYes'
          onChange={() =>
            updateFilters({ underAvvikling: 'underAvviklingYes' })
          }
          checked={
            filters.underAvvikling === 'underAvviklingYes' ? true : false
          }
        />{' '}
        Ja
        <input
          type='radio'
          name='underAvvikling'
          value='underAvviklingNo'
          onChange={() => updateFilters({ underAvvikling: 'underAvviklingNo' })}
          checked={filters.underAvvikling === 'underAvviklingNo' ? true : false}
        />{' '}
        Nei
        <input
          type='radio'
          name='underAvvikling'
          value='underAvviklingAll'
          onChange={() =>
            updateFilters({ underAvvikling: 'underAvviklingAll' })
          }
          checked={
            filters.underAvvikling === 'underAvviklingAll' ? true : false
          }
        />{' '}
        Begge
      </div> */}

      {/* -------------------------------------------------------------------------- */}
      <div>
        <button
          onClick={() => {
            {
              handleSearch(filters)
              SaveSearch(filters)
            }
          }}>
          Søk
        </button>
        <button onClick={() => resetFilters()}>Nullstill</button>
      </div>
    </>
  )
}

export default SearchInput
