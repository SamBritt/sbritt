import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

export const RepoTable = () => {
    const [repos, setRepos] = useState([{}])
    const [loading, setloading] = useState(true);

    useEffect(() => {
        let mounted = true;

        fetch("https://api.github.com/users/SamBritt/repos?per_page=100")
            .then(res => res.json())
            .then((data) => {
                if(mounted){
                    setloading(false);
                    setData(data);
                }
            });

            return function cleanup() {
                mounted = false
            }
    }, [])

    const setData = (repos) => {
        setRepos(repos)
        console.log(repos)
    }
    const toShortDate = (date) => {
        var d = new Date(date)

        let month = d.getMonth();
        month = (month + 1).toString();

        let year = d.getFullYear().toString().substr(-2);
        return `${month}/${year}`

    }
    const copyToClipboard = (e) => {
        console.log(e)
    }
    const dateCompare = (a,b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    }

    return (
        <table id="repoTable">
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
                        return <tr key={idx}>

                            <td>{idx}</td>
                            <td>{toShortDate(repo.created_at)}</td>
                            <td>
                                <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                    {repo.name}
                                </a>
                            </td>
                            <td>
                                <a value = {repo.clone_url} onClick={(e) => copyToClipboard(e)}>
                                    <FontAwesomeIcon icon={faClone} />
                                </a>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
