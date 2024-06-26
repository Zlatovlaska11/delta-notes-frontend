"use client"

import axios from 'axios';
import { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useParams } from 'next/navigation';

const TheGoods: React.FC = () => {


    const [info, setInfo] = useState<string>();
    let params = useParams<{ id: string; filename: string }>()

    if (params.filename == undefined){
        params = useParams<{id: string, filename: string }>()


    }

    const fetchData = async () => {
        try {

            const response = await axios.get<string>(`http://127.0.0.1:8080/pptx?id=${params.id}&filename=${params.filename}`)
            if (response.status === 200) {
                console.log(response.data)
                setInfo(response.data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const source = `| Travis                                                                                                                        |                                                                      Circle CI                                            |                                                                                                                                                              Coveralls |                                                                                                                              Codecov | Codacy                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------------------------: |  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Build Status](https://travis-ci.org/NickBusey/BulletNotes.svg?branch=master)](https://travis-ci.org/NickBusey/BulletNotes) | [![CircleCI](https://circleci.com/gh/NickBusey/BulletNotes.svg?style=svg)](https://circleci.com/gh/NickBusey/BulletNotes) | [![Coverage Status](https://coveralls.io/repos/github/NickBusey/BulletNotes/badge.svg?branch=master)](https://coveralls.io/github/NickBusey/BulletNotes?branch=master) | [![codecov](https://codecov.io/gh/NickBusey/BulletNotes/branch/master/graph/badge.svg)](https://codecov.io/gh/NickBusey/BulletNotes) | [![Codacy Badge](https://api.codacy.com/project/badge/Grade/8e7f3a2a82e74c5ebddc3253e89d09fd)](https://www.codacy.com/app/NickBusey/BulletNotes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=NickBusey/BulletNotes&amp;utm_campaign=Badge_Grade) |

# BulletNotes

https://bulletnotes.io/

<p align="center">
  <a href="https://bulletnotes.io/">
    <img src=".github/demo.gif">
  </a>
</p>

## Goal

An open-source, fully featured note taking, journaling, self quantification app. Similar in many ways to Workflowy or Dynalist.

### Focus

* Privacy
 * You can run a copy on your own server. Own all your data.
* Data Portability
 * Nightly export to drop box is in a human friendly .txt file. You can copy/paste the export straight into other note taking apps such as Workflowy. Every extra feature beyond nested notes is implemented with hashtags, so no data is lost on export.
* Ease of Use
 * Point and click friendliness for less technical users.
 * API and CLI interface for more technical users.
 * Chat bot
 	* Telegram Interface

\`\`\`
brew install NickBusey/Bulletnotescli/bulletnotescli
\`\`\`


## User Guide, Planned Feature List, and Bug Tracker

https://bulletnotes.io/note/gPQcYmjmqwfnHeTWE/GjT4R6pMFA

## Local Development Instructions

Install the latest Node, NPM, and Meteor.

Clone the repo.

\`\`\`
cd BulletNotes
npm start
\`\`\`

That's it! Note: You may have to run this several times when first starting to get it to download everything.

## Heroku Deployment

Create a Heroku app. Add an mLab addon for your database. Fork this repo and deploy your forked branch to Heroku as normal, as per Heroku's documentation. Set your buildpack to https://github.com/AdmitHub/meteor-buildpack-horse.git

## Background Images

All images in public/img/bgs are CC0 License, Free for personal and commercial use, No attribution required

* Space - https://www.pexels.com/photo/rock-formation-during-night-time-167843/
* Field - https://www.pexels.com/photo/sky-field-agriculture-cornfield-7601/
* City - https://www.pexels.com/photo/aerial-architectural-design-architecture-buildings-373912/
* Mountain - https://www.pexels.com/photo/adventure-alpine-altitude-austria-355241/
* Abstract - https://www.pexels.com/photo/abstract-art-artistic-background-459799/
* Light - https://www.pexels.com/photo/abstract-art-blur-bulb-287748/
* Beach - https://www.pexels.com/photo/beach-calm-clouds-idyllic-457882/
* Snow - https://www.pexels.com/photo/snow-covered-ground-60561/
`


    fetchData()

    let embed = `https://view.officeapps.live.com/op/embed.aspx?src=${info}`

    return (

        <>
            <div className="h-full w-full flex flex-row align-middle items-center content-center  justify-evenly">

                <div className="w-5/12 bg-black h-4/6">
                    <object data={embed} className="h-full w-full">
                    </object>
                </div>


                <div className="w-5/12  h-4/6 flex align-middle justify-center">
                    <MarkdownPreview source={source} style={{ padding: 16, }} className='w-full overflow-scroll' />
                </div>

            </div>

        </>

    );

};

export default TheGoods
