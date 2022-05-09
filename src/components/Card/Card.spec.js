import { render, screen, waitFor } from "@testing-library/react";
import Card from "./Card";

describe('Card Component', () => {
    const data = {
        id: 1,
        name: "Glenna Reichert",
        phone: "(775)976-6794 x41206",
        username: "Delphine",
        website: "conrad.com",
        email: "Chaim_McDermott@dana.io",
        address: {
            city: "Bartholomebury",
            geo: { lat: '24.6463', lng: '-168.8889' },
            street: "Dayna Park",
            suite: "Suite 449",
            zipcode: "76495-3109"
        },
        company: {
            bs: "aggregate real-time technologies",
            catchPhrase: "Switchable contextually-based project",
            name: "Yost and Sons"
        }

    }
    it('show Card', async () => {
        render(<Card data={data} />)

        await waitFor(() => {
            screen.debug(screen.getByTestId('card-form'))
            expect(screen.getByTestId('card-form')).toBeInTheDocument()
            expect(screen.getByText('Glenna Reichert')).tobeTruthy
            expect(screen.getByText('Bartholomebury')).tobeTruthy
            expect(screen.getByText('Yost and Sons')).tobeTruthy
        })
    })

})