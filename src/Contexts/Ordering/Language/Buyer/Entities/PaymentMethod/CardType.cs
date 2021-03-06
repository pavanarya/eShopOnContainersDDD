﻿using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Enumeration;

namespace eShop.Ordering.Buyer.Entities.PaymentMethod
{
    public class CardType : Enumeration<CardType, string>
    {
        public static CardType Visa = new CardType("VISA", "Visa");
        public static CardType Amex = new CardType("AMEX", "Amex");
        public static CardType Mastercard = new CardType("MASTERCARD", "Mastercard");

        public CardType(string value, string displayName) : base(value, displayName) { }
    }
}
