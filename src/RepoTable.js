import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
export const RepoTable = ({repos}) => {
    
    const toShortDate = (date) => {
        var d = new Date(date)

        let month = d.getMonth();
        month = (month + 1).toString();

        let year = d.getFullYear().toString().substr(-2);
        return `${month}/${year}`

    }

    const dateCompare = (a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    }

    return (
        <div id="repoTableContainer"
            style={{ marginTop: '85px', height: '500px', overflowY: 'scroll' }}>
            
            <table id="repoTable" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Created</th>
                        <th>Name</th>
                        <th>Clone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        repos.sort(dateCompare).map((repo, idx) => {
                            return (
                                <motion.tr key={idx}>
                                    <td>{idx}</td>
                                    <td>{toShortDate(repo.created_at)}</td>
                                    <td>
                                        <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                            {repo.name}
                                        </a>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faClone} />
                                    </td>
                                </motion.tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
