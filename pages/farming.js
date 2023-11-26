import React, { useEffect, useState } from 'react';
import { auth, db } from './utils/firebase';
import Layout from '../components/Layout';
import Bg from '../components/Bg';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Home = () => {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      // Get the current points and completed tasks of the user from the database
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setPoints(doc.data().points);
            setCompletedTasks(doc.data().completedTasks || []);
          }
        });
    }
  }, [user]);

  const handleTwitterConnect = async () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTaskCompletion = async (taskNumber) => {
    // Check if the task has already been completed
    if (completedTasks.includes(taskNumber)) {
      console.log(`Task ${taskNumber}: Already completed.`);
      return;
    }

    const uid = user.uid;
    const updatedPoints = points + 100;
    const updatedCompletedTasks = [...completedTasks, taskNumber];

    // Update points and completed tasks in the database
    await db.collection('users').doc(uid).set(
      {
        points: updatedPoints,
        completedTasks: updatedCompletedTasks,
      },
      { merge: true }
    );

    // Update state with the new points value and completed tasks
    setPoints(updatedPoints);
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  const renderTask = (taskNumber, taskName) => {
    // Check if the task has already been completed
    const isTaskCompleted = completedTasks.includes(taskNumber);

    const handleTaskClick = () => {
      // Check if the task has already been completed
      if (isTaskCompleted) {
        console.log(`Task ${taskNumber}: Already completed.`);
        return;
      }

      // Handle task completion
      handleTaskCompletion(taskNumber);
    };

    return (
      <div
        className={`task ${isTaskCompleted ? 'completed' : ''}`}
        key={taskNumber}
        onClick={handleTaskClick}
      >
        <div>
          {isTaskCompleted ? (
            <img src="/lock.svg" alt="unlocked" width="20px" />
          ) : (
            <img src="/arrow.svg" alt="lock" width="20px" />
          )}
        </div>
        <div>
          <p>{`Task ${taskNumber}: ${taskName}`}</p>
        </div>
        <div>
          {isTaskCompleted ? (
            <img src="/arrow.svg" alt="checkmark" width="20px" />
          ) : (
            <img src="/arrow.svg" alt="arrow" width="20px" />
          )}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        <div className="main-farming">
          <div className="main-bg">
            <Bg />
          </div>
          {user ? (
            <div className="farm-land">
              <div className="box-farming">
                <div>
                  <div>
                    <h1>DROP POINTS</h1>
                    <div className="board">
                      Hello, {user.displayName}! <br />
                      {points}
                    </div>
                  </div>
                </div>
                <div>
                  {[
                    { number: 1, name: 'Tweet' },
                    { number: 2, name: 'Retweet' },
                    { number: 3, name: 'Like' },
                    { number: 4, name: 'Share' },
                    { number: 5, name: 'Post' },
                  ].map((task) => renderTask(task.number, task.name))}
                </div>
                {completedTasks.length === 5 && (
                  <p className="complete">All tasks completed!</p>
                )}
                <div className="logout">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="twitter-intent">
              <p>Please connect your X account to start earning points!</p>
              <button onClick={handleTwitterConnect}>CONNECT X</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
