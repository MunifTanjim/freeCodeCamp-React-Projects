import styled from 'styled-components'

export const Table = styled.section `
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`

const Cell = styled.div `
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 1.25rem;
`

export const IndexCell = styled(Cell) `
  width: 2rem;
  max-width: 4rem;
  text-align: center;
`

export const TextCell = styled(Cell) `
  width: 10rem;
  text-align: left;
`

export const NumberCell = styled(Cell) `
  width: 4rem;
  max-width: 8rem;
  text-align: center;
`

export const Caption = styled.header `
  display: flex;
  flex-flow: row nowrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: #006400;
  color: #fff;
  height: 48px;
`

export const Row = styled.div `
  display: flex;
  flex-flow: row nowrap;
  padding: .5rem 1rem;
  flex-shrink: 0;

  &:nth-child(odd) {
    background-color: #E0E0E0;
  }
`

export const Header = styled(Row) `
  background-color: #007E00;
  color: #fff;
  font-weight: bold;
`
