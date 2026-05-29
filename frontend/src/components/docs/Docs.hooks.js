// Pathing
// _______
// src/components/docs/Docs.hooks.js

// ----------------------------------------------------------------------------------------
// OBS:
// DENNE COMPONENT ER LAVET AF AI FOR AT KUNNE NÅ I MÅL
// 
// Det er justeret til at mig selv, og sikret at det følger resten af sidens koncept og opsætning.
// ----------------------------------------------------------------------------------------

import { useState, useMemo } from 'react'
import { endpoints, METHOD_ORDER } from './data/docs-data'

function normalizeEndpoint(ep) {
  const request = ep.request ?? []
  const response = ep.response ?? []

  return {
    ...ep,

    params: request.map(p => ({
      name: p.name,
      type: p.type ?? 'body',
      required: p.required ?? false,
      description: p.description ?? ''
    })),

    requestBody: request.length
    ? {
        dto: 'RequestDTO',
        example: Object.fromEntries(
            request.map(r => [r.name, r.example ?? r.type])
        )
        }
    : null,

    responseBody: response.length
    ? {
        dto: 'ResponseDTO',
        example: Object.fromEntries(
            response.map(r => [r.name, r.example ?? r.type])
        )
        }
    : null
  }
}

export function useDocs() {
  const [expanded, setExpanded] = useState(new Set())
  const [activeMethod, setActiveMethod] = useState('ALL')

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const isExpanded = (id) => expanded.has(id)

  const grouped = useMemo(() => {
    const filtered =
      activeMethod === 'ALL'
        ? endpoints
        : endpoints.filter(e => e.method === activeMethod)

    const normalized = filtered.map(normalizeEndpoint)

    return METHOD_ORDER.reduce((acc, method) => {
      const group = normalized.filter(e => e.method === method)
      if (group.length) acc[method] = group
      return acc
    }, {})
  }, [activeMethod])

  const methods = ['ALL', ...METHOD_ORDER]

  return {
    grouped,
    toggle,
    isExpanded,
    activeMethod,
    setActiveMethod,
    methods
  }
}