import { useEffect, useState } from 'react'
import { BedriftsList } from '../components/BedriftsList'
import { CleanData } from '../components/CleanData'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import { useFetch } from '../hooks/useFetch'
import styles from './HomePage.module.css'

export function HomePage() {
  const URL_Bedrifter_API = 'https://data.brreg.no/enhetsregisteret/api/enheter'

  const [filters, setFilters] = useState({
    bedriftName: '',
    kommuneName: '',
    kommuneCode: '',
    selectedKommune: '',
    organisasjonsnummer: '',
    fraRegistreringsdato: '',
    tilRegistreringsdato: '',
    konkurs: '',
    underTvangsavviklingEllerTvangsopplosning: '',
    underAvvikling: '',
    // registrertIMvaregisteret:'',
    // registrertIForetaksregisteret:'',
    // registrertIStiftelsesregisteret:'',
    // registrertIFrivillighetsregisteret:'',
    // frivilligRegistrertIMvaregisteret:'',
  })
  const navn = filters.bedriftName && `&navn=${filters.bedriftName}`
  const kommune = filters.kommuneCode && `&kommunenummer=${filters.kommuneCode}`
  const organisasjonsnummer =
    filters.organisasjonsnummer &&
    `&organisasjonsnummer=${filters.organisasjonsnummer}`
  const fraRegistreringsdato =
    filters.fraRegistreringsdato &&
    `&fraRegistreringsdatoEnhetsregisteret=${filters.fraRegistreringsdato}`
  const tilRegistreringsdato =
    filters.tilRegistreringsdato &&
    `&tilRegistreringsdatoEnhetsregisteret=${filters.tilRegistreringsdato}`
  const konkurs =
    !filters.konkurs || filters.konkurs === 'konkursAll'
      ? ''
      : filters.konkurs === 'konkursYes'
      ? '&konkurs=true'
      : '&konkurs=false'
  const underTvangsavvikling =
    !filters.underTvangsavviklingEllerTvangsopplosning ||
    filters.underTvangsavviklingEllerTvangsopplosning ===
      'underTvangsavviklingEllerTvangsopplosningAll'
      ? ''
      : filters.underTvangsavviklingEllerTvangsopplosning ===
        'underTvangsavviklingEllerTvangsopplosningYes'
      ? '&underTvangsavviklingEllerTvangsopplosning=true'
      : '&underTvangsavviklingEllerTvangsopplosning=false'
  const underAvvikling =
    !filters.underAvvikling || filters.underAvvikling === 'underAvviklingAll'
      ? ''
      : filters.underAvvikling === 'underAvviklingYes'
      ? '&underAvvikling=true'
      : '&underAvvikling=false'

  const [page, setPage] = useState(0)
  const [lastPage, setLastPage] = useState(0)
  const [url, setUrl] = useState(URL_Bedrifter_API + '?page=' + page)
  const { data, error, isLoading, fetchData } = useFetch(url)

  const urlQuery =
    navn +
    kommune +
    organisasjonsnummer +
    fraRegistreringsdato +
    tilRegistreringsdato +
    konkurs +
    underTvangsavvikling +
    underAvvikling

  function handleSearch() {
    setPage(0)
    const searchUrl = URL_Bedrifter_API + `?page=0` + urlQuery
    console.log(searchUrl)
    fetchData(searchUrl)
  }

  function prevPage() {
    if (page > 0) {
      setPage((prevState) => prevState - 1)
      setUrl(URL_Bedrifter_API + `?page=${page - 1}` + urlQuery)
    }
  }

  function nextPage() {
    setPage((prevState) => prevState + 1)
    setUrl(URL_Bedrifter_API + `?page=${page + 1}` + urlQuery)
  }
  function resetFilters() {
    setFilters(() => {
      for (const field in filters) {
        filters[field] = ''
      }
      return filters
    })
    handleSearch(filters)
  }

  function updateFilters(array) {
    setFilters((prevFilters) => {
      let updatedFilters = { ...prevFilters }
      for (const field in array) {
        updatedFilters[field] = array[field]
      }
      return updatedFilters
    })
  }
  useEffect(() => {
    // console.log(filters)
  }, [filters])

  useEffect(() => {
    if (data && data.page && data.page.totalPages) {
      setLastPage(data.page.totalPages)
    }
  }, [data])

  //console.log(data)
  return (
    <>
      <div>
        {isLoading ? (
          'Loading data'
        ) : error ? (
          'Kunne ikke hente bedrifter data'
        ) : data ? (
          <>
            <section id='search-input' className='flex column'>
              <SearchInput
                handleSearch={handleSearch}
                filters={filters}
                updateFilters={updateFilters}
                resetFilters={resetFilters}
              />
            </section>
            {data._embedded && data._embedded.enheter.length > 0 ? (
              <>
                <section id='search-result'>
                  <div>Funnet bedrifter: {data.page.totalElements}</div>
                  <div>Total antall sider: {data.page.totalPages}</div>
                </section>
                <section id='bedrift-list'>
                  <ul>
                    {data._embedded.enheter.map((bedrift, index) => {
                      const item = CleanData(bedrift)
                      return (
                        <li key={index} className={styles.bedriftCard}>
                          <BedriftsList enhet={item} page={page} />
                        </li>
                      )
                    })}
                  </ul>
                </section>
                <section id='pagination' className='pagination flex center'>
                  <Pagination
                    page={page}
                    lastPage={lastPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                  />
                </section>
              </>
            ) : data.feilmelding ? (
              <section>
                <h3>{data.feilmelding}</h3>
                <div>{data.valideringsfeil[0].feilaktigVerdi}</div>
                <div>{data.valideringsfeil[0].feilmelding}</div>
              </section>
            ) : (
              <section>Ingenting ble funnet for forespørselen din</section>
            )}
          </>
        ) : (
          'Kunne ikke hente bedrifter list'
        )}
      </div>
    </>
  )
}
