import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe('SearchBar Component', () => {
    it('show search box', async () => {
        render(<SearchBar />)
        await waitFor(() => {
            expect(screen.getByRole('textbox', { name: /searchBox/i })).tobeTruthy
        })
    })
    it('show search button', async () => {
        render(<SearchBar />)
        await waitFor(() => {
            expect(screen.getByTestId('search-button')).tobeTruthy
        })
    })
    it('show search Card', async () => {
        render(<SearchBar />)
        await waitFor(() => {
            expect(screen.getByTestId('card')).tobeTruthy
        })
    })
})