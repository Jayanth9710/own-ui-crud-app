import React, { useState } from 'react'

let UserContext = React.createContext();

export default UserContext;

// Provider for Products.//

export const UserProvider = ({children}) => {

    const [userList,setUserList] = useState([
        {   
            avatar:"https://c4.wallpaperflare.com/wallpaper/69/95/582/berlin-aerial-view-wallpaper-preview.jpg",
            userName:"Jay",
            position:"GIS Developer"
        },
        {   
            avatar:"https://wallpaperaccess.com/full/1091855.jpg",
            userName:"Walter White",
            position:"Creator"
        },
        {   
            avatar:"https://imgix.ranker.com/list_img_v2/11599/1991599/original/best-saul-goodman-quotes?w=817&h=427&fm=jpg&q=50&fit=crop",
            userName:"Saul Goodman",
            position:"Legal Advisor"
        },
        {   
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqApi1O115i19scPZZGS2cqtiKVI8KhSp0oA&usqp=CAU",
            userName:"Jesse Pinkman",
            position:"Intern"
        },
        {   
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Wo3L7LwM81iVh8XQYZinFo3m6rlfM917kA&usqp=CAU",
            userName:"Gustavo Fring",
            position:"Manager"
        },
        {   
            avatar:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBIVFRUWFxUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFysdHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0rLf/AABEIAQMAwgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAORAAAgEDAgMFBgYBAwUBAAAAAAECAxEhBDESQVEFImFxgTKRobHB8BMUQlLR4QYjovEzQ2KS0hX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEAAgMBAQADAQAAAAAAAAABAhESITEDQRNRYUL/2gAMAwEAAhEDEQA/APMziLcDVKIuUTy7evTM4AOJpaFyiaQhoiYySAaKifiEjqGgWgWhqJsVXUye7M7GNAtFSllMNoFosZDYqwRCoGxVgiAA0VYOxViqGxVgyABYlgrFWCBJYKxQFWIWQD1TFyQ+SFSR53pIlEXJD5IXJFjNIaAaHtASRpkloFo0U6Llt6t7JdWVW1cKXsLin1f0XL722Fy0THaPRNLiqyVNbri9p+UFn32MstRTXsxc/GT4V/6xz/uMVarKb4pu7Y2lTJutzGHqp/4R/wB3/wBF8Ceyt8ilA004YM8rHT+OViqUmtxZ1HS5My1tK90bx+kvrln8bO4ylBWKOjgqxLFkAGxVgyrACQKxViiiWLsUFVYhdiAeskhckNkLked6CpIW0NYEkVmkyRIUr+CWW3y/sNox9oVrPgXLfzLaSbDrtZjggrLz38ZdWc1xb3G2C4SeN6KgjXQj1EpGmjFkrWLRShe1viaKVMlKmjZGlZXZzdC40r9CSpHT0lFPy54HVezW8K2X9PIG3ldbpL5jv0ObY9Zq9DKO6PP6+hZ367+Z1+eX48/1w/6jHYlgiWOzgGxQdiWJtAECsSwA2KsFYgA2IWWUepYDCbAZwegLAaDYLKlFpYrivLaN5Pnsr2+BwJXbbfNndqy4aM31aj82zhon7W8fA2CRdi+ENKSNmnikrszIJVLbEHV0neeMcs5OhVptLfmcTR1H94OvRyr3fp/Ritxq0dXCvy6Zv4D1q7PLae+U9/tmOnwxzxbrxfwKcL7XfS30IadDVzUlhp/E872jR7r95150rWsrfAyalXWSy6pZ1p5mxdgrEPU8IbFWDsVYALEsHYqwA2KsHYliALFB2IEejKZLlHN3UCwiWKyV2i7UF41H8Ir+TiJnV7Vq3ox4Wn35ZTv+mODjQkZ166S+NEYltBJCasrEaNpwuPlpv258jmyqy8h8Krirybs/v3F0cmmipKVrO51qFVxUnnaT+D+vzOFV7Ya/5T+NgavbzcXFLdNe8nG1ZnI9LPXJUlJrN0uu9jVS1qxwrf4WseaoxqVKL4It8LT8Wk82W7Ef/u8LSXJdNzPFq2Pb3cm7rGfvJg1bj7N8rlzPOy/yOo/ZdvT+xUJ1pPi4Xnnb62HC/qc/6XOOWDYNXe6syWPRHkvobFWDsSwC7EsHYlggLFWDsSwAWIHYoDuEKLObohk7TquNNqOOK0fTn9DWYe113F5r7+ArWHrJDTpxzi/Nc7GGMLSt0wbvxLJb77cs7szy3ZI65Q1MqrHBUWNTwRGCbqfpXq/ogY6WrL/uL79DpQot7IZT0sd3f5e8vJOLJqv8fxxKqrKN+8nm2+2xioUopYyzp6uvKS4I4j8/6MjppYRZb+nGb6bux9W4ytkxdsdmcNTjjJcE7ytm6b3ti1r59QKVS0k1umelWmjVglJ2f7ujeza6Gd8btrXKaeUo9myuuGpbbZPOW8vrnd+HQ7Ol0deLX+teOzutuhtpdnxi+GrDvLmr58Vk61KhZK+Eljr5smWe1xwkecqxy14gWNWsj35W6iLHWXp5cp3QWJYOxVioCxLB2JYALFWGWKsAFihliAdRFgthIxttYnWwvTl4Z92X8Lj0VKN8Al04DqJu3zFz3Y6vRUW4SV18bcmjPUVmSO1ohkJWEjIgdClqkhmpqKe2yOSx9OeLGdLtc4dcGOdVcs+I3tCpe0F93M1Sm4+znzNyM2j00O8m/tnruyqd3GLtmyavjPM8SlNZbXha6+Z2OzK1aVuGMnn2nhed2TKNYX8erUeKPVxdvLp8EZ3VaZxuz9dUhqalOp+ra2Va2GvvqdDWX4jlY6SsOod5NirDZrINjvPHjy9oLEDsVYqKjC5U4WCsUyALEsW0RhdKsUEUVHWlSaBaJKu2Cmc3TQ0VcKNNsGpBLdjaaYu0dO52cctYttdHJ1dGUZJTSTavvfm9/HB3fxEmc3tuV+F26orUv456Y2mxFxkGWtRqUFYCnuFx4YEX8MmVZr3k5DaWnlJ4Xrsi6EVlv1Dh2pGCyaRu7H0ibnxRu4pnX7LXFTV91g87T7ampcVKPg1wykmvRGuHa1WLxTkvBQk1d77mLK3NN3amizGol3oOz8Yt/Tf3mitO+fvYTpu2I1O7OLjJ9U17rha18Kfknjx3M9+NbYmDcWq+LopV0dnkaJyATFVa6SuZfz/RCQtbvEkharouUl1Aa6T6khTTdrinUXUiIN35SPUhi42WTVXopa8Ja4wfl5dC1ppdDeonbbU7Uk8IB1+beTPHSSCWkkOl7Op18CtfqouHC3ndejS+tvUYtFLwPManUN1JdPZ9EJJU3Y6PGNps52nr3w9/maoyFjUybuI0aaKlxJ81jzMUZXWC6eos7oxp02fVpxatJZ87cyQpqCbjBO9vd9ozKV2bqEJNXey8UL0s7XT7SktobeZrodrttJ01snt1H6TRRlbixzyaqnZVsw93O318jFsbm1aitxxzbGUun2jD2vqe5HO9l7h9ehJPBxNY5NpftVvXmXCbrP0usSISfUZGqLsyuB9Dv08vaVJ8TDwhaTBlO2GBojVLlVM6TCUWOjsU5eJFVktmU4FKNh0dmfmZdSC+EsdHbrORUaphjdbsZx8jjp6Gv8RF3Obp5NyyhGv7XSTVLLTs5fpxvw/ufwHG1LlI1dqdpcC4YvvP4LqeTTyXUrOTbbu3zFnfHHUcMstno00dTylsZYsJotiSupRr28uo9yRxoVGtv6Y6FW+zs+n8GLi3MnUhVs8ch8K12ktr3OOqttx1PV2d7E4tTJ6nSa/haT2f0OxDWLdM8DW7Qva18G+HaU1TlNxaUc3ljyS5ts53Cuk+kdX/ACPthU4XWZPEV8bvwPJ0e0XTn3sxl3vFN7tGHX66dWfFN7YS5JB6iN6af7X8GdccJJ245Z3K9PR09ZSltOPlez9w+J4uErjKdVr2W15Nr5C/NJ9P8ewcRcoJ8jzkddV/e/XPzGR7TnzyThWv5I77iVb3HHXaifVM1U9ReN73JxsWZStyiC8PJieoZnr6y63yJDk6PGupZxPxvEsvFObtcE3ysurwl6sXW1EI8+J+5fy/gYu0e1ZSeX6dPojlVKjeXkY4b9MvpJ43aztNywm/TCsYalW/8dEtkLIdZjI5XK1ZCiFQymxqZni7MeiVYhCwSA41msPKGwqoQjRSceaVueCVZXS7F08qksbLeXTwXVmX/Iu0FOSpU3/p0/8AdLm/Tb3gUu0ZKDhBqCd8+D5J8vMxfgcuhJO91u5dajLY7MKF4OPVHMrNRwsy5vkvLx8SafVTjnib8HlGrNuc1GeLsNYOo9p2639+fqXTZpBxYdhQUX7gCLhNohRBrm+JKxElH2kZ6NRxd0dGWik0ndNPJi9Nzti410IafypBuLqueworBVgmbcyvwwXFj4gyY2E2KHSBZTQLBxYIUfABilcgBcZEVZbljOzcU/Ld/IhI9OTwwO/2wtI9PB0lGNW6Votd5WfE2ly8d+Rx6Tbi8XaWPLODDCVjbo5b28DOtRd7rnNGvR0OK99l8fA0anQ3V47811/sLsSm5zVK6UpSSXFhXeLMtvSSdudqY95+YETods6OVKrKE1aSw14r+rP1MJqXpL6MrYqDL/mwQcWHuJg+QyLIq0dDs7WKPdm+7yf7f6MJRLNrLp3nGPUhwbvqyGeDfNES5AUzbmOIFXb1CiDV2AtPAMkSDwEwFMiZckCUdDTqM13llc9iS0kdsp8mY6FXhdzpyyroxem5qsNWm4uz/wCToarsWrSjCpK1pSth5UrN2fuefAXUpKa8VzK/OVJWjVlJqLwn124vF25sbpqOXTVr33NWgdppcnj15DdfSxfmufVGKnUs0+jT9zNexnyu+0ZtTpl7S7srpqS6moTqXheZzjrWftOpOredRtzVrt5vZWx4WOUd1o4tf2nZWy9jeP8ATnnCx8qTW/W/pkQaaUrxy9sb8n0yWsQmpG2enyDiwpIVHDsVTYlghJkELLuQgCYNyTZUSoOJJrckSNhS6TGITHDGpgU2U4F1OTLsELUTboJ/pfoY+YSdmn0Yqy6dPZhVqd0JlqFs/PwHUJ35mHQuPei48+Ry5HWkrO5h11O0r8pZ9eZrFnKPX/4ZGhOrFahJqUO7xWa48dcX3Ry+3KEYV6lOnmEZNRzey3SvzavbzRi7Oleml0bX1+o5o561W/YFMw9oUf1L1Nkty5xurPn9+81LpLNuIauzJLj4W2lNOPPdru4Uo3zZZdle+bCtRS4Xb3Ck7ZN+uXlaJL+PuwuaNmtXe4v3pS58/PPy8MGYRaGDCAW4wCEIQBVVhWBirsKbCLiRspEAXU3GAVgkUHuioEgytmQVPcky6hTKG1l7L8Le53+Ul97yFRxdy5y7sfXmukeXE3yBcenuMq6FOqpLxAr0eKLjz3XmYqVThfgdOOVdEvTcu2bsmeJL1+j+RtZiiuGqmtppr13/AIN1vvZkq4+E1Vi/T5Eixrj98zNSfLoQFWpcSszkVINOzO1ERq9PxK63XxNSplNgj3tOnb/pzaeHa085tFRTuublJ25JGVB9nO7lCy70WlhN38O636Rtfra4C8eWGVhUkFAgKKCIHxEAVTQDeQ3sKKg0QhAKq7EiWwYAGi5glvYgkykXLYi5FGqtF/gxb4rcSs7T4dp7N92/d5Z36MS2MqqP4MbcPFx5X+nxfr3suO22+NvAzwJFqSd0b9DPBz4rDNXZr38iXxcfWvUU7xxumpLzWf6HqV7Pr97lJ+INPGOj+8eTRh0FL7/5M0/a8/maZiKyx5fbEKKDDg/v7+YmEh0WBh11Hhkprrn7+1gXqo96/Kax5rfkl7sZOnKKkmnzOc4Nwcf1Qd/Gy3eE21Z7tpK3M1KxlCYkBT+Pz5Bo0yhC7EIFzFoshpFosogFgR5lkAItFEAhfQhAOxqKK/IRneV/xUrcc+H2p/ovw38bdTixIQzj+tZC6juzXn0/ghC3xJ66ak7FwWX5L6/wQhzdVT2Fv57kIIEQZoXP0IQtSGREWtKs/wBsItJ5V+K13F4ljqiEJCuWlh+AwhDo5RTIQgV//9k=",
            userName:"Hank",
            position:"Security"
        }
    ])

    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
} 