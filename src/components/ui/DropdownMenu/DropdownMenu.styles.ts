import styled from 'styled-components'

const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 100%;
    border-radius: var(--default-border-radius);
    min-width: 120px;
    font-size: 14px;
    background-color: var(--color-accent-dark-100);
    overflow: hidden;
`

const StyledDropdown = styled.div`
    width: 100%;
    cursor: pointer;
`
const DropdownItem = styled.div`
    padding: 5px;
    width: 100%;
    &:hover {
        background-color: var(--color-accent-dark-300);
    }
`

export { StyledDropdown, DropdownItem, DropdownContent }