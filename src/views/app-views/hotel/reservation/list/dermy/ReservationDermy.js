export const ReservationDermy = [
    {
        reservationId: '11ee87c6-f80a-68fb-b032-1f1ccbdb5a03',
        reservationNumber: '221013131',
        status: 'PAYMENT',
        isPackage: true,
        rentCarReservationId: 'KL_123141',
        hotel: {
            hotelId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            hotelName: '시그니엘 부산',
            roomId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            roomName: 'string',
            adultCount: 2,
            childCount: 2,
            childAges: [
                "string"
            ],
            checkInDate: '2024-01-24',
            checkOutDate: '2024-01-25',
            booker: {
                name: '김모카',
                passportEnglishLastName: 'Kim',
                passportEnglishFirstName: 'Mocha',
                phoneNumber: '+82 01012345678',
                email: 'kimmocha@teamo2.kr'
            },
            guest: {
                name: '김모카',
                passportEnglishLastName: 'Kim',
                passportEnglishFirstName: 'Mocha',
                phoneNumber: '+82 01012345678'
            },
            specialRequestTypes: [
                "NON_SMOKING_ROOM",
                "SMOKING_ROOM"
            ],
            specialRequest: 'Please upgrade my room to a suite.'
        },
        cancelPenalties: [
            {
                start: '2023-11-29T23:59:59Z',
                end: '2023-11-30T23:59:59Z',
                type: 'PERCENTAGE',
                amount: 30,
                currency: 'KRW'
            }
        ],
        payment: {
            principal: 0,
            paymentType: {
                viewName: '카카오페이',
                name: 'TOSS_PAYMENTS_KAKAO_PAY',
                logo: 'KAKAOPAY_1'
            },
            paymentKey: 'string',
            payment: 100000,
            usePoint: 0,
            useCoupon: 0,
            useCouponId: 'string',
            paymentDateTime: '2024-01-25T09:42:15.734Z',
            cardInstallmentPlan: 0,
            prepaids: [
                {
                    price: 100000,
                    currency: 'KRW',
                    includeTax: true,
                    description: '호텔 숙박 요금(세금 및 수수료 포함)'
                }
            ]
        },
        payOnArrival: {
            price: 43.4,
            krwPrice: 46850,
            currency: 'GBP',
            includeTax: true,
            description: '현지세'
        }
    }
]
