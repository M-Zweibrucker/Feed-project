import { Trash, ThumbsUp } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    
    function handleDeleteComment() {
        onDeleteComment(content);
    };
    
    
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/M-Zweibrucker.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Zweibrucker</strong>
                            <time title='01 de Agosto as 8:25h' dateTime='2023-08-01 08:25:20'>Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}