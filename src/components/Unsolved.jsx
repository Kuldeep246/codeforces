import React from 'react';
import { apidataState } from '../store/atoms';
import { useRecoilValue } from 'recoil';

const Unsolved = () => {
    const apiData = useRecoilValue(apidataState);

    const solvedProblems = new Set(
        apiData
            .filter(submission => submission.verdict === 'OK')
            .map(submission => `${submission.problem.contestId}-${submission.problem.index}`)
    );

    const unsolvedProblems = apiData
        .filter(submission => submission.verdict !== 'OK' && !solvedProblems.has(`${submission.problem.contestId}-${submission.problem.index}`))
        .reduce((unsolvedSet, submission) => {
            unsolvedSet.add(`${submission.problem.contestId}-${submission.problem.index}`);
            return unsolvedSet;
        }, new Set());

    const unsolvedCount = unsolvedProblems.size;

    return (
        <div className='flex flex-col w-2/3 p-3 '>
            <p className='text-base font-semibold'>Number of unsolved problems: {unsolvedCount}</p>
            {unsolvedCount > 0 && (
                <div className='flex flex-col mt-2'>
                    <p className='text-lg font-semibold'>Unsolved problems:</p>
                    <ul className='flex flex-wrap justify-start space-x-3'>
                        {[...unsolvedProblems].map((problem, index) => (
                            <li key={index} className='mb-1'>
                                <a
                                    href={`https://codeforces.com/contest/${problem.split('-')[0]}/problem/${problem.split('-')[1]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-blue-500 hover:underline'
                                >
                                    {problem}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Unsolved;
