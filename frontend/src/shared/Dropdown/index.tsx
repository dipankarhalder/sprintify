/** node modules */
import React, { useState, useEffect, useRef, useMemo } from 'react'
import clsx from 'clsx'

/** types */
import type { DropdownItem, DropdownGroup } from './types'

/** custom hook and utils */
import { Search, Darrow, Uarrow } from '@/icons'
import { useClickOutside } from '@/hooks/useClickOutside'
import { getCache, setCache } from '@/utils/cache'

/** interfaces */
interface DropdownProps {
  cacheKey?: string
  groups: DropdownGroup[]
  onSelect: (item: DropdownItem) => void
  selectedId?: string
  placeholder?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  cacheKey = 'dropdownCache',
  groups,
  onSelect,
  selectedId,
  placeholder = 'Select...',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDetailsElement>(null!)

  /** used initial call of custom hook */
  useClickOutside(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  /** cache list on first render */
  useEffect(() => {
    if (!getCache(cacheKey)) {
      setCache(cacheKey, groups)
    }
  }, [cacheKey, groups])

  /** filter items by global search */
  const filteredGroups = useMemo(() => {
    const cachedGroups: DropdownGroup[] = getCache(cacheKey) || groups
    if (!search.trim()) return cachedGroups

    return cachedGroups
      .map(group => ({
        ...group,
        items: group.items.filter(item =>
          item.label.toLowerCase().includes(search.toLowerCase()),
        ),
      }))
      .filter(group => group.items.length > 0)
  }, [search, groups, cacheKey])

  /** highlight search text */
  const highlightText = (text: string) => {
    if (!search) return text
    const regex = new RegExp(`(${search})`, 'gi')
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(regex, `<mark>$1</mark>`),
        }}
      />
    )
  }

  const selectedLabel =
    groups.flatMap(g => g.items).find(i => i.id === selectedId)?.label ??
    placeholder

  return (
    <details
      ref={dropdownRef}
      className="dropdown"
      open={isOpen}
      onToggle={e => setIsOpen(e.currentTarget.open)}
    >
      <summary
        className="dropdown__toggle"
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={e => {
          e.preventDefault()
          setIsOpen(prev => !prev)
        }}
      >
        {selectedLabel}
        {isOpen ? <Uarrow /> : <Darrow />}
      </summary>
      {isOpen && (
        <div className="dropdown__menu" role="listbox">
          <div className="dropdown__search-cover">
            <Search />
            <input
              className="dropdown__search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search options"
            />
          </div>

          {filteredGroups.map(group => (
            <div key={group.group} className="dropdown__group">
              <div className="dropdown__group-label">{group.group}</div>
              {group.items.map(item => (
                <div
                  key={item.id}
                  role="option"
                  tabIndex={0}
                  className={clsx('dropdown__item', {
                    'dropdown__item--selected': item.id === selectedId,
                  })}
                  onClick={() => {
                    onSelect(item)
                    setIsOpen(false)
                  }}
                >
                  {item.icon && (
                    <span className="dropdown__icon">{item.icon}</span>
                  )}
                  <span className="dropdown__label">
                    {highlightText(item.label)}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {filteredGroups.length === 0 && (
            <div className="dropdown__empty">No results found</div>
          )}
        </div>
      )}
    </details>
  )
}
