﻿using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Commands;

namespace eShop.Ordering.Order.Entities.Item.Commands
{
    public class OverridePrice : StampedCommand
    {
        public Guid ProductId { get; set; }
        public Guid OrderId { get; set; }

        public long Price { get; set; }
    }
}
