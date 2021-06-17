'use strict';

const express = require('express');
const router = express.Router();
const monsters = require('../model/db')

router.get('/:monsterSlug?', (req, res) => {
    if (!!req.params.monsterSlug)  {
        let monsterName = ''
        let monsterSpecies = '' 

        const theMonster = monsters.find(monster => monster.slug === req.params.monsterSlug);
       res.render('template', {
           locals: {
                title: theMonster.name,
                species: theMonster.species
           },
           partials: {
                partial: 'partial-monster-detail'
           }
       })
    } else {
        res.render('template', {
            locals: {
                title: 'Monster Page',
                data: monsters
            },
            partials: {
                partial: 'partial-monster-list'
            }
        })
    }   
})

module.exports = router;