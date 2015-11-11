﻿var ractive = new Ractive({
    // The `el` option can be a node, an ID, or a CSS selector.
    el: '#container',

    // We could pass in a string, but for the sake of convenience
    // we're passing the ID of the <script> tag above.
    template: '#template-intro',

    // Here, we're passing in some initial data
    data: { name: 'umm user', anotherDataItem: 'some boring header text...' }
});

var ractive, xmen;

// define our superheroes
xmen = [
  { name: 'Nightcrawler', realname: 'Wagner, Kurt', power: 'Teleportation', info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
  { name: 'Cyclops', realname: 'Summers, Scott', power: 'Optic blast', info: 'http://www.superherodb.com/Cyclops/10-50/' },
  { name: 'Rogue', realname: 'Marie, Anna', power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
  { name: 'Wolverine', realname: 'Howlett, James', power: 'Regeneration', info: 'http://www.superherodb.com/Wolverine/10-161/' }
];

ractive = new Ractive({
    el: '#container-list',
    template: '#template-list',
    append: true,
    data: { superheroes: xmen }
});


var cities = [
    {
        "name": "London, UK",
        "months": [
            {
                "high": 7.9,
                "low": 2.4
            },
            {
                "high": 8.2,
                "low": 2.2
            },
            {
                "high": 10.9,
                "low": 3.8
            },
            {
                "high": 13.3,
                "low": 5.2
            },
            {
                "high": 17.2,
                "low": 8
            },
            {
                "high": 20.2,
                "low": 11.1
            },
            {
                "high": 22.8,
                "low": 13.6
            },
            {
                "high": 22.6,
                "low": 13.3
            },
            {
                "high": 19.3,
                "low": 10.9
            },
            {
                "high": 15.2,
                "low": 8
            },
            {
                "high": 10.9,
                "low": 4.8
            },
            {
                "high": 8.8,
                "low": 3.3
            }
        ]
    },
    {
        "name": "San Francisco, CA, US",
        "months": [
            {
                "high": 13.8,
                "low": 7.6
            },
            {
                "high": 15.7,
                "low": 8.6
            },
            {
                "high": 16.6,
                "low": 9.2
            },
            {
                "high": 17.3,
                "low": 9.6
            },
            {
                "high": 17.9,
                "low": 10.6
            },
            {
                "high": 19.1,
                "low": 11.6
            },
            {
                "high": 19.2,
                "low": 12.3
            },
            {
                "high": 20.1,
                "low": 12.8
            },
            {
                "high": 21.2,
                "low": 12.8
            },
            {
                "high": 20.7,
                "low": 12.1
            },
            {
                "high": 17.3,
                "low": 10.1
            },
            {
                "high": 13.9,
                "low": 7.8
            }
        ]
    },
    {
        "name": "Phoenix, AZ, US",
        "months": [
            {
                "high": 19.7,
                "low": 7.6
            },
            {
                "high": 21.6,
                "low": 9.3
            },
            {
                "high": 25.1,
                "low": 11.9
            },
            {
                "high": 29.7,
                "low": 15.7
            },
            {
                "high": 35,
                "low": 20.7
            },
            {
                "high": 40.1,
                "low": 25.4
            },
            {
                "high": 41.2,
                "low": 28.6
            },
            {
                "high": 40.3,
                "low": 28.2
            },
            {
                "high": 37.8,
                "low": 24.9
            },
            {
                "high": 31.5,
                "low": 18.2
            },
            {
                "high": 24.3,
                "low": 11.4
            },
            {
                "high": 19,
                "low": 7.1
            }
        ]
    },
    {
        "name": "New York City, NY, US",
        "months": [
            {
                "high": 3.5,
                "low": -2.8
            },
            {
                "high": 5.3,
                "low": -1.7
            },
            {
                "high": 9.8,
                "low": 1.8
            },
            {
                "high": 16.2,
                "low": 7.1
            },
            {
                "high": 21.6,
                "low": 12.2
            },
            {
                "high": 26.3,
                "low": 17.6
            },
            {
                "high": 28.9,
                "low": 20.5
            },
            {
                "high": 28.1,
                "low": 19.9
            },
            {
                "high": 24,
                "low": 16
            },
            {
                "high": 17.7,
                "low": 10
            },
            {
                "high": 12.1,
                "low": 5.3
            },
            {
                "high": 6.1,
                "low": 0
            }
        ]
    },
    {
        "name": "Buenos Aires, Argentina",
        "months": [
            {
                "high": 30.4,
                "low": 20.4
            },
            {
                "high": 28.7,
                "low": 19.4
            },
            {
                "high": 26.4,
                "low": 17
            },
            {
                "high": 22.7,
                "low": 13.7
            },
            {
                "high": 19,
                "low": 10.3
            },
            {
                "high": 15.6,
                "low": 7.6
            },
            {
                "high": 13.9,
                "low": 7.4
            },
            {
                "high": 17.3,
                "low": 8.9
            },
            {
                "high": 18.9,
                "low": 9.9
            },
            {
                "high": 22.5,
                "low": 13
            },
            {
                "high": 25.3,
                "low": 15.9
            },
            {
                "high": 28.1,
                "low": 18.4
            }
        ]
    },
    {
        "name": "Sydney, Australia",
        "months": [
            {
                "high": 25.9,
                "low": 18.7
            },
            {
                "high": 25.8,
                "low": 18.8
            },
            {
                "high": 24.7,
                "low": 17.5
            },
            {
                "high": 22.4,
                "low": 14.7
            },
            {
                "high": 19.4,
                "low": 11.5
            },
            {
                "high": 16.9,
                "low": 9.3
            },
            {
                "high": 16.3,
                "low": 8
            },
            {
                "high": 17.8,
                "low": 8.9
            },
            {
                "high": 20,
                "low": 11.1
            },
            {
                "high": 22.1,
                "low": 13.5
            },
            {
                "high": 23.6,
                "low": 15.6
            },
            {
                "high": 25.2,
                "low": 17.5
            }
        ]
    },
    {
        "name": "Moscow, Russia",
        "months": [
            {
                "high": -4,
                "low": -9.1
            },
            {
                "high": -3.7,
                "low": -9.8
            },
            {
                "high": 2.6,
                "low": -4.4
            },
            {
                "high": 11.3,
                "low": 2.2
            },
            {
                "high": 18.6,
                "low": 7.7
            },
            {
                "high": 22,
                "low": 12.1
            },
            {
                "high": 24.3,
                "low": 14.4
            },
            {
                "high": 21.9,
                "low": 12.5
            },
            {
                "high": 15.7,
                "low": 7.4
            },
            {
                "high": 8.7,
                "low": 2.7
            },
            {
                "high": 0.9,
                "low": -3.3
            },
            {
                "high": -3,
                "low": -7.6
            }
        ]
    },
    {
        "name": "Berlin, Germany",
        "months": [
            {
                "high": 2.9,
                "low": -1.5
            },
            {
                "high": 4.2,
                "low": -1.6
            },
            {
                "high": 8.5,
                "low": 1.3
            },
            {
                "high": 13.2,
                "low": 4.2
            },
            {
                "high": 18.9,
                "low": 9
            },
            {
                "high": 21.8,
                "low": 12.3
            },
            {
                "high": 24,
                "low": 14.7
            },
            {
                "high": 23.6,
                "low": 14.1
            },
            {
                "high": 18.8,
                "low": 10.6
            },
            {
                "high": 13.4,
                "low": 6.4
            },
            {
                "high": 7.1,
                "low": 2.2
            },
            {
                "high": 4.4,
                "low": -0.4
            }
        ]
    },
    {
        "name": "Beijing, China",
        "months": [
            {
                "high": 1.8,
                "low": -8.4
            },
            {
                "high": 5,
                "low": -5.6
            },
            {
                "high": 11.6,
                "low": 0.4
            },
            {
                "high": 20.3,
                "low": 7.9
            },
            {
                "high": 26,
                "low": 13.6
            },
            {
                "high": 30.2,
                "low": 18.8
            },
            {
                "high": 30.9,
                "low": 22
            },
            {
                "high": 29.7,
                "low": 20.8
            },
            {
                "high": 25.8,
                "low": 14.8
            },
            {
                "high": 19.1,
                "low": 7.9
            },
            {
                "high": 10.1,
                "low": 0
            },
            {
                "high": 3.7,
                "low": -5.8
            }
        ]
    },
    {
        "name": "Nairobi, Kenya",
        "months": [
            {
                "high": 24.5,
                "low": 11.5
            },
            {
                "high": 25.6,
                "low": 11.6
            },
            {
                "high": 25.6,
                "low": 13.1
            },
            {
                "high": 24.1,
                "low": 14
            },
            {
                "high": 22.6,
                "low": 13.2
            },
            {
                "high": 21.5,
                "low": 11
            },
            {
                "high": 20.6,
                "low": 10.1
            },
            {
                "high": 21.4,
                "low": 10.2
            },
            {
                "high": 23.7,
                "low": 10.5
            },
            {
                "high": 24.7,
                "low": 12.5
            },
            {
                "high": 23.1,
                "low": 13.1
            },
            {
                "high": 23.4,
                "low": 12.6
            }
        ]
    }
];

var ractiveGraph = new Ractive({
    el: '#container-graph',
    template: '#template-graph',
    data: {
        scale: function (val) {
            // quick and dirty...
            return 2 * Math.abs(val);
        },
        format: function (val) {
            // Pro-tip: we're using `this.get()` inside this function -
            // as a result, Ractive knows that this computation depends
            // on the value of `degreeType` as well as `val`
            if (this.get('degreeType') === 'fahrenheit') {
                // convert celsius to fahrenheit
                val = (val * 1.8) + 32;
            }

            return val.toFixed(1) + '°';
        },
        getColor: function (val) {
            // quick and dirty function to pick a colour - the higher the
            // temperature, the warmer the colour
            var r = Math.max(0, Math.min(255, Math.floor(2.56 * (val + 50))));
            var g = 100;
            var b = Math.max(0, Math.min(255, Math.floor(2.56 * (50 - val))));

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        },
        monthNames: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    }
});

ractiveGraph.set('cities', cities);

// when the user makes a selection from the drop-down, update the chart
ractiveGraph.observe('selectedIndex', function (index) {
    this.animate('selectedCity', cities[index], {
        easing: 'easeOut'
    });
});