// Pathing
// _______
// src/components/docs/Docs.jsx

// ----------------------------------------------------------------------------------------
// OBS:
// DENNE COMPONENT ER LAVET AF AI FOR AT KUNNE NÅ I MÅL
// 
// Det er justeret til at mig selv, og sikret at det følger resten af sidens koncept og opsætning.
// ----------------------------------------------------------------------------------------

import styles from './Docs.module.css'
import { useDocs } from './Docs.hooks'
import { BASE_URL } from './data/docs-data'

const ACCESS_META = {
  'PUBLIC':  { icon: '',     label: 'Public'  },
  'JWT':     { icon: '',       label: 'JWT'     },
  'API':     { icon: '',      label: 'API'     },
  'ADMIN':   { icon: '',      label: 'Admin'   },
  'SUPPORT': { icon: '', label: 'Support' },
}

const ACCESS_CLASS = {
  'PUBLIC':  styles.accessPUBLIC,
  'JWT':     styles.accessJWT,
  'API':     styles.accessAPI,
  'ADMIN':   styles.accessADMIN,
  'SUPPORT': styles.accessSUPPORT,
}

function parseAccessLevels(accessLevel = '') {
  return accessLevel
    .split('/')
    .flatMap(token =>
      token
        .trim()
        .split('_OR_')
        .flatMap(t => t.trim().split('_AND_'))
    )
    .map(t => t.trim())
    .filter(Boolean)
    .filter((v, i, arr) => arr.indexOf(v) === i)
}

const PARAM_TYPE_LABEL = {
  param: 'URL',
  query: 'Query',
  body:  'Body',
}

function AccessBadges({ accessLevel }) {
  const levels = parseAccessLevels(accessLevel)

  return (
    <span className={styles.accessBadges}>
      {levels.map(level => {
        const meta = ACCESS_META[level] ?? {
          icon: 'fa-circle',
          label: level,
        }

        return (
          <span
            key={level}
            className={`${styles.access} ${ACCESS_CLASS[level] ?? ''}`}
          >
            <i className={`fa ${meta.icon}`} aria-hidden="true" />
            {meta.label}
          </span>
        )
      })}
    </span>
  )
}

function JsonBlock({ title, dto, data }) {
  return (
    <div className={styles.bodyBlock}>
      <p className={styles.paramsHeading}>{title}</p>

      <div className={styles.dtoName}>
        {dto}
      </div>

      <pre className={styles.jsonBlock}>
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  )
}

export default function Docs() {

  const {
    grouped,
    toggle,
    isExpanded,
    activeMethod,
    setActiveMethod,
    methods,
  } = useDocs()

  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>
            API Reference
          </span>

          <h1 className={styles.heading}>
            Endpoint dokumentation
          </h1>

          <p className={styles.baseUrl}>
            <i className="fa fa-link" aria-hidden="true" />
            <span>{BASE_URL}</span>
          </p>
        </div>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Filtrer efter metode"
        >
          {methods.map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={activeMethod === m}
              className={`
                ${styles.tab}
                ${activeMethod === m ? styles.tabActive : ''}
                ${m !== 'ALL' ? styles[`tab${m}`] : ''}
              `}
              onClick={() => setActiveMethod(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <div className={styles.groups}>
          {Object.entries(grouped).map(([method, items]) => (
            <section key={method} className={styles.group}>

              <h2 className={`${styles.methodLabel} ${styles[`method${method}`]}`}>
                {method}
                <span className={styles.methodCount}>
                  {items.length}
                </span>
              </h2>

              <ul className={styles.list} role="list">
                {items.map((ep) => {

                  const open = isExpanded(ep.id)

                  return (
                    <li
                      key={ep.id}
                      className={`${styles.row} ${open ? styles.rowOpen : ''}`}
                    >

                      <button
                        className={styles.rowSummary}
                        onClick={() => toggle(ep.id)}
                        aria-expanded={open}
                      >

                        <span className={`${styles.badge} ${styles[`badge${method}`]}`}>
                          {method}
                        </span>

                        <span className={styles.endpoint}>
                          <span className={styles.endpointBase}>
                            {BASE_URL}
                          </span>

                          <span className={styles.endpointPath}>
                            {ep.endpoint}
                          </span>
                        </span>

                        <AccessBadges accessLevel={ep.accessLevel} />

                        <i
                          className={`
                            fa fa-chevron-down
                            ${styles.chevron}
                            ${open ? styles.chevronOpen : ''}
                          `}
                          aria-hidden="true"
                        />
                      </button>

                      {open && (
                        <div className={styles.params}>

                          <p className={styles.expandedDescription}>
                            {ep.description}
                          </p>

                          {ep.params && ep.params.length > 0 ? (
                            <>
                              <p className={styles.paramsHeading}>
                                Parametre
                              </p>

                              <table className={styles.paramsTable}>
                                <thead>
                                  <tr>
                                    <th>Navn</th>
                                    <th>Type</th>
                                    <th>Påkrævet</th>
                                    <th>Beskrivelse</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {ep.params.map((p) => (
                                    <tr key={p.name}>

                                      <td>
                                        <code>{p.name}</code>
                                      </td>

                                      <td>
                                        <span
                                          className={`
                                            ${styles.paramType}
                                            ${styles[`paramType${p.type}`]}
                                          `}
                                        >
                                          {PARAM_TYPE_LABEL[p.type] ?? p.type}
                                        </span>
                                      </td>

                                      <td>
                                        {p.required ? (
                                          <span className={styles.required}>
                                            Ja
                                          </span>
                                        ) : (
                                          <span className={styles.optional}>
                                            Nej
                                          </span>
                                        )}
                                      </td>

                                      <td>
                                        {p.description}
                                      </td>

                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </>
                          ) : (
                            <p className={styles.noParams}>
                              Ingen parametre for dette endpoint.
                            </p>
                          )}

                          {ep.requestBody && (
                            <JsonBlock
                              title="Request Body"
                              dto={ep.requestBody.dto}
                              data={ep.requestBody.example}
                            />
                          )}

                          {ep.responseBody && (
                            <JsonBlock
                              title="Response Body"
                              dto={ep.responseBody.dto}
                              data={ep.responseBody.example}
                            />
                          )}

                        </div>
                      )}

                    </li>
                  )
                })}
              </ul>

            </section>
          ))}
        </div>

      </div>
    </main>
  )
}